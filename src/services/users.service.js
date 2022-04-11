import { axiosService } from './axios.service';
import { links } from '../constants';

export const usersService = {
    getAll: () => axiosService.get(links.users)
}
