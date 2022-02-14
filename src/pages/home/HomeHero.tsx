import { countryPhoneCodes } from "providers/country-phone-code";
import classNames from "classnames";

export function HomeHero() {

    const leftBlock = (
        <div className="lg:tw-mr-4">
            <h1 className={classNames(
                "tw-text-3xl tw-leading-[2.5rem] tw-font-medium tw-tracking-[-0.035em] tw-mt-12.5",
                "md:tw-text-[2.5rem] md:tw-leading-[2.875rem]",
                "lg:tw-mt-0",
                "lg:tw-text-[2.75rem] lg:tw-tracking-[-0.03em] lg:tw-leading-[2.875rem]"
            )}>
                Buy stocks with crypto
            </h1>
            <p className={classNames(
                "tw-mt-5 md:tw-text-[1.125rem] tw-tracking-[-0.02em] tw-leading-[1.625rem]",
                "md:tw-max-w-[29.625rem] md:tw-mt-2",
                "lg:tw-mt-5"
            )}>
                No market closes. No trading fees. All the stocks and crypto coins you love.
            </p>

            <div className="tw-hidden md:tw-block tw-mt-15 tw-text-[1.125rem] tw-tracking-[-0.02em] tw-leading-[1.625rem]">
                Ready to start trading?
            </div>

            <div className={classNames(
                "tw-flex tw-flex-col tw-mt-7.5 tw-text-[1.125rem] tw-track-[-0.02em] tw-lead-[1.625rem]",
                "md:tw-mt-3 md:tw-flex-row"
            )}>

                <select
                    defaultValue={'US'}
                    className={classNames(
                        "tw-py-[1.0625rem]", "tw-px-5", "tw-h-[3.8125rem]", "tw-rounded-md", "tw-appearance-none",
                        "tw-bg-stgrey-6", "tw-bg-no-repeat", "tw-bg-[url('images/select-arrow-down.svg')]", "tw-bg-[right_1.25rem_center]",
                        "md:tw-max-w-[103px] md:tw-mr-2 md:tw-px-3.75 md:tw-bg-[right_0.9375rem_center]"
                    )
                }>
                    {
                        countryPhoneCodes.map(el => {
                            return <option key={el.code} value={el.code}>{el.code} {el.dial_code}</option>
                        })
                    }
                </select>

                <input type="text" placeholder="Enter your phone number"
                    className={classNames(
                        "tw-rounded-md tw-bg-stgrey-6 tw-mt-2 tw-h-15.25", "placeholder:tw-text-primary-1000 tw-px-5",
                        "md:tw-flex-grow md:tw-mt-0 md:tw-mr-2",
                        "lg:tw-w-[373px] lg:tw-flex-shrink lg:tw-flex-grow-0"
                    )} />

                <button className={classNames(
                    "tw-bg-primary-1000 tw-rounded-lg tw-h-15.25 tw-mt-5 tw-text-white",
                    "md:tw-mt-0 md:tw-px-7"
                )}>
                    Send link
                </button>
            </div>
        </div>
    );

    const rightBlock = (
        <div className={classNames(
            "tw-hidden",
            "lg:tw-block",
            "tw-h-[639px] tw-w-[295px] tw-mr-25 tw-border-2 tw-border-primary-1000 tw-rounded-3xl"
        )}>

        </div>
    );

    return (
        <div className={
            classNames(
                "tw-container tw-text-primary-1000",
                "lg:tw-flex lg:tw-justify-between lg:tw-items-center lg:tw-mt-20"
            )
        }>

            {leftBlock}

            {rightBlock}

        </div>
    )
}