import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CreateClient.css'
import axios from '../../../../../axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { expresiones } from '../../../../../helpers/regex';
import { uiShowBarLoading } from '../../../../../actions/ui';
import { toast, Slide } from 'react-toastify';

const schema = yup.object().shape({

    type_membership: yup.string().required('Campo requerido'),
                     
    name: yup.string()
             .required('Campo requerido')
             .matches(expresiones.name, "Solo letras"),
  
    nro_membership: yup.string()
            .required('Campo requerido')
            .matches(expresiones.numbers, "Solo números"),
  
    surname: yup.string()
              .required('Campo requerido')
              .matches(expresiones.name, "Solo letras"),

    documents: yup.string()
                  .required('Campo requerido'),

    duration: yup.string()
                  .required('Campo requerido')
                  .matches(expresiones.numbers, "Solo números"),
    
    email: yup.string()
              .required('Campo requerido')
              .email('Correo electrónico inválido'),
    
    price: yup.string()
              .required('Campo requerido')
              .matches(expresiones.numbers, "Solo números"),

    seller: yup.string()
              .required('Campo requerido')
                      
  });
  

export const CreateClient = ({setviewPanel, editClient = null, getClients}) => {

    const [memberships, setMemberships] = useState([])
    const [sellers, setSellers] = useState([])

    const { register, handleSubmit, setValue, clearErrors, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const getMemberships = async() => {
        let res = await axios.get(`/memberships`);
        const {data} = res
        setMemberships(data)
        if (editClient) {
            setValue('type_membership', editClient.membership_id)
        }
    }

    const getSeller = async() => {
        let res = await axios.get('admin/sellers')
        setSellers(res.data)
        if (editClient) {
            setValue('seller', editClient.seller_id)
        }
    }

    useEffect(() => {
        getMemberships()
        getSeller()
    }, [])

    useEffect(() => {
        if (editClient) {
            console.log('editClient', editClient)
            setValue('type_membership', editClient.membership_id)
            setValue('name', editClient.name)
            setValue('nro_membership', editClient.membership_number)
            setValue('surname', editClient.surname)
            setValue('documents', editClient.document)
            setValue('duration', editClient.duration)
            setValue('email', editClient.email)
            setValue('price', editClient.cost)
            setValue('seller', editClient.seller_id)
        }
    }, [editClient])

    const registerClient = async(data) => {
        
        const request = {
            membership_id: data.type_membership,
            membership_number: data.nro_membership,
            document: data.documents,
            duration: data.duration,
            cost: data.price,
            name: data.name,
            surname: data.surname,
            email: data.email,
            seller_id: data.seller
        }

        try {
            dispatch(uiShowBarLoading(true))

            let res = await axios.post(`/admin/customer/register`, request);
  
            dispatch(uiShowBarLoading(false))
    
            toast('Cliente registrado', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
            });

            reset()

            getClients()

            setviewPanel('main')
        } catch (error) {
            console.log(error)
            dispatch(uiShowBarLoading(false))
        }
      }

      const updatedClient = async(data) => {

        const request = {
            admin_customer_id: editClient.id,
            membership_id: data.type_membership,
            membership_number: data.nro_membership,
            document: data.documents,
            duration: data.duration,
            cost: data.price,
            name: data.name,
            surname: data.surname,
            email: data.email,
            seller_id: data.seller
        }

        try {

            dispatch(uiShowBarLoading(true))

            let res = await axios.post(`/admin/customer/update`, request);
  
            dispatch(uiShowBarLoading(false))
    
            toast('Cliente actualizado', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
            });

            reset()

            getClients()

            setviewPanel('main')
        } catch (error) {
            console.log(error)
            dispatch(uiShowBarLoading(false))
        }
      }

      const onSubmit = (data) => {

        if (!editClient) {
            registerClient(data)
        } else {
            updatedClient(data)
        }
  
        reset()
  
    }

    return (
        <div className="createClient">
            <h5 className="admin__titlePanel">Nuevo cliente</h5>
            <div className="row">
                <div className="col-md-6">
                        <div className="admin__inputSelect mb-2">
                            <p>Tipo membresía</p>
                            <select
                                name="type_membership"
                                {...register('type_membership')}
                                // onChange={handleInputChange}
                            >
                                <option value="">
                                Seleccionar membresía
                                </option>
                                {
                                    memberships.map(e => (
                                        <option value={e.id}>{e.name}</option>
                                    ))
                                }
                            </select>
                            <p className="input__error">{errors['type_membership']?.message}</p>
                        </div>
                        <div className="admin__inputText">
                            <p>Nº de membresía</p>
                            <input
                                type="text"
                                placeholder="Ingresa numero de membresia"
                                name="nro_membership"
                                {...register('nro_membership')}
                            />
                            <p className="input__error">{errors['nro_membership']?.message}</p>
                        </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admin__inputText">
                                <p>Documento</p>
                                <input
                                    type="text"
                                    placeholder="MM/AA"
                                    name="documents"
                                    {...register('documents')}
                                />
                                <p className="input__error">{errors['documents']?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admin__inputText">
                                <p>Duración</p>
                                <input
                                    type="text"
                                    placeholder="Ej: 8 años"
                                    name="duration"
                                    {...register('duration')}
                                />
                                <p className="input__error">{errors['duration']?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admin__inputText">
                                <p>Costo</p>
                                <input
                                    type="text"
                                    placeholder="1200 usd"
                                    name="price"
                                    {...register('price')}
                                />
                                <p className="input__error">{errors['price']?.message}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="admin__inputText">
                        <p>Nombre</p>
                        <input
                            type="text"
                            placeholder="Ingresa el nombre"
                            name="name"
                            {...register('name')}
                        />
                        <p className="input__error">{errors['name']?.message}</p>
                    </div>
                    <div className="admin__inputText">
                        <p>Apellido</p>
                        <input
                            type="text"
                            placeholder="Ingresa el apellido"
                            name="surname"
                            {...register('surname')}
                        />
                        <p className="input__error">{errors['surname']?.message}</p>
                    </div>
                    <div className="admin__inputText">
                        <p>Correo</p>
                        <input
                            type="email"
                            placeholder="Ingresa el correo"
                            name="email"
                            {...register('email')}
                        />
                        <p className="input__error">{errors['email']?.message}</p>
                    </div>
                    <div className="admin__inputSelect mb-2">
                            <p>Asignar vendedor</p>
                            <select
                                name="seller"
                                {...register('seller')}
                                // onChange={handleInputChange}
                            >
                                <option value="">
                                Seleccionar vendedor
                                </option>
                                {
                                    sellers.map(e => (
                                        <option value={e.id}>{e.name}</option>
                                    ))
                                }
                            </select>
                            <p className="input__error">{errors['seller']?.message}</p>
                    </div>      
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                {
                    !editClient ?
                    <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
                        <img
                        src="../../../static/IMAGENES/Icon/SVG/carrito-icon.svg"
                        className="img-fluid"
                        />
                        Vender
                    </button>
                    :
                    <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
                        <img
                        src="../../../static/IMAGENES/Icon/SVG/carrito-icon.svg"
                        className="img-fluid"
                        />
                        Editar
                    </button>

                }
            </div>
        </div>
    )
}
