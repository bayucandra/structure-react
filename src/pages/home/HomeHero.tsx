import { countryPhoneCodes } from "providers/country-phone-code";
import classNames from "classnames";

export function HomeHero() {
    return (
        <div className="tw-container tw-text-primary-1000">
            <h1 className="tw-text-3xl tw-leading-[2.5rem] tw-font-medium tw-tracking-[-0.035em]">Buy stocks with crypto</h1>
            <p className="tw-mt-5 tw-tracking-[-0.02em] tw-leading-[1.625rem]">
                No market closes. No trading fees. All the stocks and crypto coins you love.
            </p>
            <div className="tw-flex tw-flex-col tw-mt-7.5 tw-text-[1.125rem] tw-track-[-0.02em] tw-lead-[1.625rem]">
                <select className={classNames(
                        "tw-py-[1.0625rem]", "tw-px-5", "tw-h-[3.8125rem]", "tw-rounded-md", "tw-appearance-none",
                        "tw-bg-stgrey-6", "tw-bg-no-repeat", "tw-bg-[url('images/select-arrow-down.svg')]", "tw-bg-[right_1.25rem_center]",
                    )}>
                    {
                        countryPhoneCodes.map( el => {
                            return <option key={el.code} defaultValue={'US'} value={el.code}>{el.code} {el.dial_code}</option>
                        } )
                    }
                </select>
                <input type="text" placeholder="Enter your phone number" className={classNames(
                    "tw-rounded-md tw-bg-stgrey-6 tw-mt-2 tw-h-[3.8125rem]", "placeholder:tw-text-primary-1000 tw-px-5"
                )}/>

                <button className={classNames(
                    "tw-bg-primary-1000 tw-rounded-lg tw-py-4.5 tw-mt-5",
                    "tw-text-white"
                )}>
                    Send link
                </button>
            </div>
        </div>
    )
}