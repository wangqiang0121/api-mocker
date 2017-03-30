import R from 'ramda';
import config from '../../config';

const domain = process.env === 'development' ? config.dev.ajax : config.build.ajax;

export default R.map((url) => {
    return `${domain}${url}`;
})({
    GROUPS: '/server/group',
    GROUP: '/server/group/:groupId',
    APIS: '/server/api',
    GROUP_APIS: '/server/api/:groupId',
    API: '/server/api/:groupId/:apiId'
});
