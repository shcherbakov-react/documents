import { LoginForm } from "features/AuthByUsername/ui/LoginForm";
import cls from './AuthPage.module.scss'

export const AuthPage = () => {
    return (
        <div className={cls.authPage}>
            <LoginForm />
        </div>
    )
}