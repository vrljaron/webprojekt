import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getIdentifierForm } from './identifier.form';

export function getEvidenceForm(): FormGroup {
    return new FormGroup({
        id: new FormControl([getIdentifierForm('uid')]),
        version: new FormControl(),
        title: new FormControl('',Validators.required),
        shortTitle: new FormControl('',Validators.required),
        status: new FormControl('unknown',Validators.required),
        publisher: new FormControl(),
        description: new FormControl(),
        exposureBackground: new FormControl(0,Validators.required),
    });
}
