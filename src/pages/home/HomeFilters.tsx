import classNames from "classnames";
import { Reducer, useReducer, useState } from "react";
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

    const tabItemClasses = classNames(
        "tw-text-primary-1000 tw-font-bold"
    );

    return (
        <div className="tw-container">

            <ul className="tw-flex tw-flex-nowrap tw-overflow-x-auto no-scrollbar tw-mt-12">
                {
                    tabData.map((el, idx) => {//Tab header
                        return (
                            <li key={el.title}
                                onClick={() => tabClick(el.title)}
                                className={classNames(
                                    "tw-block tw-flex-none tw-text-primary-1000",
                                    { "tw-font-medium": state.activeTab === el.title },
                                    { "tw-mr-7.5": idx < (tabData.length - 1) }
                                )}>
                                {el.title}
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
                                { "tw-hidden": state.activeTab !== el.title }
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

}