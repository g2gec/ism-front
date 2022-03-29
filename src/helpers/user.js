const getTypeUserForRoute = (role) => {
  if (role === "admin") {
    return "/admin/chat";
  }
  if (role === "vendedor") {
    return "/vendedor/chat";
  }
  if (role === "asociado") {
    return "/user/chat";
  }
};

module.exports = {
  getTypeUserForRoute,
};
