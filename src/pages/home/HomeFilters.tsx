import classNames from "classnames";
import { Reducer, useReducer } from "react";
import { StockItem, StockItemProp } from "./home-filters/stock-item";
import { tabData, TabTitle } from "./home-filters/tab-data";

interface HomeFiltersState {
    activeTab: string;
}

export function HomeFilters() {

    const [state, setState] = useReducer<Reducer<HomeFiltersState, Partial<HomeFiltersState>>>(
        (state, newState) => ({ ...state, ...newState }),
        {
            activeTab: TabTitle.LEADERS
        }
    );

    function tabClick( title: string ) {
        setState({activeTab: title});
    }

    const leftBlock = (
        <div className="tw-flex tw-flex-col">
            <ul className={
                classNames(
                    "tw-flex tw-overflow-x-auto no-scrollbar tw-w-[calc(100vw-2rem)]",
                    "md:tw-w-auto"
                )}>
                {
                    tabData.map((el, idx) => {//Tab header
                        return (
                            <li key={el.title}
                                onClick={() => tabClick(el.title)}
                                className={classNames(
                                    "tw-relative tw-block tw-flex-none tw-text-primary-1000 tw-cursor-pointer",
                                    { "tw-font-medium": state.activeTab === el.title },
                                    { "tw-mr-7.5": idx < (tabData.length - 1) }
                                )}>
                                {el.title}
                                <div className={classNames(
                                    "tw-absolute tw-h-[2px] tw-bg-primary-1000 tw-rounded-sm tw-bottom-0 tw-left-0 tw-right-0",
                                    { "tw-hidden": state.activeTab !== el.title }
                                )}></div>
                            </li>
                        );
                    })
                }
            </ul>

            <div className={classNames(//Panel wrapper
                "tw-block tw-my-[1.5625rem]"
            )}>
                {
                    tabData.map((el, idx) => {//Tab panel
                        return (
                            <div key={el.title} className={classNames(
                                "tw-grid tw-gap-4 tw-grid-cols-1",
                                { "tw-hidden": state.activeTab !== el.title },
                                "md:tw-grid-cols-2",
                                "lg:tw-gap-3.75"
                            )}>
                                {
                                    el.items.map((elItems:StockItemProp) => {//Stock item
                                        return <StockItem key={elItems.title} {...elItems} />
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

    const rightBlock = (
        <div className={
            classNames(
                "tw-hidden",
                "lg:tw-flex tw-flex-col tw-items-start tw-mt-[6.3125rem] tw-max-w-[29.625rem]"
            )
        }>

            <h2 className={
                classNames(
                    "tw-text-primary-1000 tw-text-[2.5rem] tw-leading-[2.875rem] tw-tracking-[-0.035em]"
                )
            }>
                All of your assets, now in one place
            </h2>

            <p className={
                classNames(
                    "tw-mt-5 tw-text-[1.125rem] tw-text-primary-1000 tw-leading-[1.625rem] tw-tracking-[-0.02em]"
                )
            }>
                Deposit crypto to the Structure Mobile App and buy stocks, crypto, and other assets in seconds.
            </p>

            <div className={classNames(
                "tw-inline-flex tw-items-center tw-justify-center tw-h-15.25 tw-mt-7.5 tw-px-6.25 tw-rounded-lg tw-bg-primary-1000",
                "tw-text-white tw-font-medium tw-text-[1.125rem] tw-leading-[1.5rem] tw-tracking-[-0.02em]"
            )}>
                Browse all assets
            </div>

        </div>
    );

    return (
        <div className="tw-container tw-flex tw-justify-between tw-mt-12 lg:tw-mt-15">

            {leftBlock}

            {rightBlock}

        </div>
    );

}