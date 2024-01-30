import classNames from "classnames";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div>
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};