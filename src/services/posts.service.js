import { axiosService } from './axios.service';
import { links } from '../constants';

export const postsService = {
    getPostsByUserId: (id) => axiosService.get(`${links.posts}?userId=${id}`)
}
