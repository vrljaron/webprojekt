import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getContactPoint } from './contact-point.form';
import { getIdentifierForm } from './identifier.form';

export function getEvidenceForm(): FormGroup {
    return new FormGroup({
        identifier: new FormControl([getIdentifierForm('uid')]),
        version: new FormControl(),
        name: new FormControl(),
        title: new FormControl(),
        shortTitle: new FormControl(),
        status: new FormControl('unknown'),
        publisher: new FormControl(),
        contact: new FormArray([
            getContactPoint('email'),
            getContactPoint('phone'),
        ]),
        description: new FormControl(),
        approvalDate: new FormControl(),
        exposureBackground: new FormControl(),
        topic: new FormArray([]),
    });
}
