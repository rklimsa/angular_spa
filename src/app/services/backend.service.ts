import { Injectable } from '@angular/core';

@Injectable()
export abstract class BackendService {

    public doGet(url: string): Promise<{}> {
        return new Promise<{}>(() => {
            // TODO: Implement
            return {
            };
        });
    }

}
