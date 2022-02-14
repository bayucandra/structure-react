import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


export interface StockItemProp {
    icon: any;
    title: string;
    amount: number;
    up: boolean;
    percentage: number;
}

export function StockItem(props:StockItemProp) {

    return (
        <div className={classNames(
            "stock-item", "tw-flex tw-items-center tw-h-[6.5625rem]"
        )}>
            <img src={props.icon} alt={props.title} className="tw-flex-none tw-h-[45px] tw-w-[45px] tw-ml-[12px]"/>

            <div className="tw-flex tw-flex-col tw-flex-1 tw-mx-2">
                <div className="tw-text-4.5 tw-font-medium tw-tracking-[-0.02em] tw-leading-[1.5rem]">
                    {props.title}
                </div>
                <div className="tw-text-stgrey-1 tw-text-[1rem] tw-leading-[1.375rem] tw-tracking-[-0.01em]">${props.amount}</div>
            </div>

            <div className="tw-flex tw-items-center tw-mr-[0.9375rem]">
                <FontAwesomeIcon icon={faCaretUp} className="tw-mr-1" />
                <div>{props.percentage}%</div>
            </div>

        </div>
    );
}