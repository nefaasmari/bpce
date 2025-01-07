import { TestBed, waitForAsync } from '@angular/core/testing';
import { DataUtilsRisqueAlertesService } from './data-utils.service';
import { NgxsModule } from '@ngxs/store';
import {
    BusinessModelsAlertesIndicateurs as model
} from '../models/models/alertes-indicateurs.model';
import { ICONFLECHEBAS, ICONFLECHEHAUT, ICONFLECHEEGAL, ICONWARNING, ICONCHECK, ICONCLOCHE, ICONEMOJICONTENT, ICONEMOJIMECONTENT, ICONEMOJINEUTRE } from '../models/constantes/ihm.constantes';

describe('DataUtilsService', () => {
    let service: DataUtilsRisqueAlertesService;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([])],
            providers: [
                DataUtilsRisqueAlertesService
            ]
        }).compileComponents();

        service = TestBed.inject(DataUtilsRisqueAlertesService);
    }));

    it('should be created', () => {
        expect(service).toBeDefined();
    });

    it('test compareAlertes', () => {
        let result = service.compareAlertes(mockAlerte1, mockAlerte2);
        expect(result).toEqual(1);
        result = service.compareAlertes(mockAlerte2, mockAlerte1);
        expect(result).toEqual(-1);
        result = service.compareAlertes(mockAlerte1, mockAlerte1);
        expect(result).toEqual(0);
    });

    it('test getIconColor', () => {
        let result = service.getIconColor(undefined);
        expect(result).toBe('');

        let item: model.IIndicateurAlerteClient = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.KO,
            typeDebranchement: undefined
        };
        result = service.getIconColor(item);
        expect(result.length).toBe(7);

        item = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.OK,
            typeDebranchement: undefined
        };
        result = service.getIconColor(item);
        expect(result.length).toBe(7);

        item = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.EQUAL,
            typeDebranchement: undefined
        };
        result = service.getIconColor(item);
        expect(result.length).toBe(7);

        item = {
            libelle: '',
            iconType: model.enumIconType.WARNING,
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIconColor(item);
        expect(result.length).toBe(7);
    });

    it('test getIconClass', () => {
        let result = service.getIconClass(undefined);
        expect(result).toBe('');

        let item: model.IIndicateurAlerteClient = {
            libelle: '',
            typeInfo: model.enumTypeInfo.OK,
            typeDebranchement: undefined
        };
        result = service.getIconClass(item);
        expect(result).toBe('success');

        item = {
            libelle: '',
            typeInfo: model.enumTypeInfo.KO,
            typeDebranchement: undefined
        };
        result = service.getIconClass(item);
        expect(result).toBe('error');

        item = {
            libelle: '',
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIconClass(item);
        expect(result).toBe('warning');

        item = {
            libelle: '',
            typeInfo: model.enumTypeInfo.EQUAL,
            typeDebranchement: undefined
        };
        result = service.getIconClass(item);
        expect(result).toBe('');
    });

    it('test getIcon', () => {
        let result = service.getIcon(undefined);
        expect(result).toBe('');

        let item: model.IIndicateurAlerteClient = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.KO,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONFLECHEBAS);

        item = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.OK,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONFLECHEHAUT);

        item = {
            libelle: '',
            iconType: model.enumIconType.FLECHE,
            typeInfo: model.enumTypeInfo.EQUAL,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONFLECHEEGAL);

        item = {
            libelle: '',
            iconType: model.enumIconType.WARNING,
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONWARNING);

        item = {
            libelle: '',
            iconType: model.enumIconType.CHECK,
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONCHECK);

        item = {
            libelle: '',
            iconType: model.enumIconType.CLOCHE,
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONCLOCHE);

        item = {
            libelle: '',
            iconType: model.enumIconType.EMOJI,
            typeInfo: model.enumTypeInfo.OK,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONEMOJICONTENT);

        item = {
            libelle: '',
            iconType: model.enumIconType.EMOJI,
            typeInfo: model.enumTypeInfo.KO,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONEMOJIMECONTENT);

        item = {
            libelle: '',
            iconType: model.enumIconType.EMOJI,
            typeInfo: model.enumTypeInfo.WARN,
            typeDebranchement: undefined
        };
        result = service.getIcon(item);
        expect(result).toBe(ICONEMOJINEUTRE);
    });
});

const mockAlerte1: model.IIndicateurAlerteClient = {
    libelle: 'A',
    typeDebranchement: undefined
};

const mockAlerte2: model.IIndicateurAlerteClient = {
    libelle: 'B',
    typeDebranchement: 1
};
