import Refuge from '../models/Refuge';
import ImagesView from './images_view';

export default {
  render(refuge: Refuge) {
    return {
      id: refuge.id,
      name: refuge.name,
      latitude: refuge.latitude,
      longitude: refuge.longitude,
      about: refuge.about,
      instructions: refuge.instructions,
      opening_hours: refuge.opening_hours,
      open_on_weekends: refuge.open_on_weekends,
      images: ImagesView.renderMany(refuge.images),
    };
  },
  renderMany(refuges: Refuge[]) {
    return refuges.map(refuge => this.render(refuge));
  },
};
