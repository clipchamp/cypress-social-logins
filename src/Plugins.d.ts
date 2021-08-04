export declare interface BaseOptions {
    username: string
    password: string
    loginSelector: string
    additionalSteps?: () => void
    usernameField?: string
    passwordField?: string
    screenshotOnError?: boolean
    passwordSubmitBtn?: string
    usernameSubmitBtn?: string
    getAllBrowserCookies?: boolean
    isPopup?: boolean
    popupDelay?: number
    cookieDelay?: number
    postLoginSelector?: string
    preLoginSelectorIframeDelay?: number
    preLoginSelectorIframe?: string
    otpSecret?: string
    loginSelectorDelay?: number
    args?: string[]
    headless?: boolean
    logs?: boolean
    useDelay?: boolean
}

export declare interface CustomizedLoginOptions
    extends Omit< BaseOptions,
        'usernameField'|
        'usernameSubmitBtn'|
        'passwordField'|
        'passwordSubmitBtn'
    > {
    usernameField: string
    usernameSubmitBtn: string
    passwordField: string
    passwordSubmitBtn: string
}

export type RedirectReturnType = 'form' | 'url'

export interface LoginConnectWithReturnRedirectReturnOptions extends BaseOptions {
    returnType: RedirectReturnType
    redirectUrl: string
}

export interface StandardReturnObject {
    cookies?: any
    lsf?: any
    ssd?: any
}

export interface ExtendedReturnObject extends StandardReturnObject {
    redirect: {
        url: string,
        method: string,
        postData: {[key: string] : string}
    }
}

export interface LoginConnectWithReturnRedirectReturnObject {}

export declare function GoogleSocialLoginAndReturn(options?: {}): Promise<StandardReturnObject>
export declare function GitHubSocialLoginAndReturn(options?: {}): Promise<StandardReturnObject>
export declare function MicrosoftSocialLoginAndReturn(options?: {}): Promise<StandardReturnObject>
export declare function AmazonSocialLoginAndReturn(options?: {}): Promise<StandardReturnObject>
export declare function FacebookSocialLoginAndReturn(options?: {}): Promise<StandardReturnObject>

export declare function GoogleSocialLogin(options?: {}): Promise<StandardReturnObject>
export declare function GitHubSocialLogin(options?: {}): Promise<StandardReturnObject>
export declare function MicrosoftSocialLogin(options?: {}): Promise<StandardReturnObject>
export declare function AmazonSocialLogin(options?: {}): Promise<StandardReturnObject>
export declare function FacebookSocialLogin(options?: {}): Promise<StandardReturnObject>

export declare function CustomizedLogin(options: CustomizedLoginOptions): Promise<StandardReturnObject>
export declare function baseLoginConnect(
    typeUsername: () => void,
    typePassword: () => void,
    otpApp: () => void | null,
    authorizeApp: () => void | null,
    postLogin: () => void,
    options: BaseOptions
): Promise<StandardReturnObject>
export declare function LoginConnectWithReturnRedirect(
    typeUsername: () => void,
    typePassword: () => void,
    otpApp: () => void | null,
    authorizeApp: () => void | null,
    postLogin: () => void,
    options: LoginConnectWithReturnRedirectReturnOptions
): Promise<LoginConnectWithReturnRedirectReturnObject>
