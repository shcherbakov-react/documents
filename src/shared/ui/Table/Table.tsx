import classNames from "classnames";
import cls from './Table.module.scss'
import { ReactNode } from "react";

interface TableProps {
    hover?: boolean;
    children?: ReactNode;
}

export const Table = (props: TableProps) => {
    const {hover, children, ...otherProps} = props;

    return <table className={classNames(cls.table, '', [])}>{children}</table>;
}