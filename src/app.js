import {showAlert} from './messages';
import $ from 'jquery';

import './styles.scss';

document.getElementById('btn-alert')
.addEventListener('click', showAlert);

$('#btn-jquery').click(() => alert('alerta con jquery'));