import { useLogin } from '../../model/hooks/useLogin'
import { LoginForm } from '../LoginForm/LoginForm'

export const LoginFormTabItem = ()=>{
	const { handleSubmit: submitLogin, isLoading: isLoginLoading, error: loadingError } = useLogin();

	return <LoginForm submitLogin={submitLogin} isLoading={isLoginLoading} error={loadingError}/>
}