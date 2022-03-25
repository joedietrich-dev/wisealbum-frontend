const ROLES = {
  SUPER_ADMIN: 1,
  ORG_OWNER: 2,
  CONTRIBUTOR: 3,
  VIEWER: 4,
};

const isSuperAdmin = (user = { role_id: undefined }) => {
  return user.role_id === ROLES.SUPER_ADMIN;
};

const isOrgOwner = (user = { role_id: undefined }) => {
  return user.role_id === ROLES.ORG_OWNER;
};

const isContributor = (user = { role_id: undefined }) => {
  return user.role_id === ROLES.CONTRIBUTOR;
};

const isViewer = (user = { role_id: undefined }) => {
  return user.role_id === ROLES.VIEWER;
};

const ROLE = { isSuperAdmin, isOrgOwner, isContributor, isViewer };

export { ROLE };
