import aboutView from '../view/aboutView.js';
import aboutService from '../service/aboutService.js';

export function init() {
    aboutView.render(aboutService);
}