export interface resultOfAuth {
    state: string;
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    patient: string;
    refresh_token: string;
}