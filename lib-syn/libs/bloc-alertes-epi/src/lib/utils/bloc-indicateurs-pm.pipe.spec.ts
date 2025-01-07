import { BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';
import { VueClientPipe } from './bloc-indicateurs-pm.pipe';

const vueClientPipe = new VueClientPipe();

describe('TroncaturePipe', () => {
  it('create an instance', () => {
    expect(vueClientPipe).toBeTruthy();
  });
});

it('VueClientPipe sans filtre', () => {
  expect(vueClientPipe.transform(mockListeATester, undefined)).toEqual(mockListeATester);
});

it('VueClientPipe sans filtre', () => {
  expect(vueClientPipe.transform(mockListeATester, true).length).toBeLessThan(mockListeATester.length);
});

const mockListeATester: model.IIndicateurAlerteClient[] = [
  {
    estVueClient: true,
    libelle: '',
    typeDebranchement: undefined
  },
  {
    estVueClient: false,
    libelle: '',
    typeDebranchement: undefined
  }
];
