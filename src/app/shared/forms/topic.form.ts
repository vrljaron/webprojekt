import { FormGroup, FormControl } from '@angular/forms';

export function getTopicForm(): FormGroup {
    return new FormGroup({
        text: new FormControl()
    });
}
