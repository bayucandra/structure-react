import { ArrowRightIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import {ReactComponent as Logo} from 'images/logo.svg'
import {ReactComponent as SandwichMenu} from 'images/sandwich-menu.svg'

export function PageHeader() {
    return <>
        <div className="tw-flex tw-items-center tw-justify-center tw-h-16 md:tw-h-10.5 tw-bg-primary-1000 tw-px-12.5">
            <p className="tw-text-white tw-tracking-[-0.01em] tw-leading-snug">Get  no-fee trading for life when you sign up today</p>
            <ArrowRightIcon className={classNames(
                "tw-text-white tw-w-8 tw-h-8 tw-ml-2.5",
                "md:tw-w-4 md:tw-h-4"
            )} />
        </div>

        <div className="tw-bg-stgrey-6">
            <div className={
                classNames(
                    "tw-container tw-flex tw-items-center tw-justify-between tw-h-19.5",
                    "md:tw-h-17"
                )
            }>
                <Logo className='tw-h-8'/>

                <ul className="tw-hidden md:tw-flex">
                    <li className="tw-mr-7.5 tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">
                        Stocks
                    </li>
                    <li className="tw-mr-7.5 tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">Crypto</li>
                    <li className="tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">Trade</li>
                </ul>

                <div className={classNames(
                    "tw-hidden",
                    "md:tw-flex"
                )}>
                    <div className={classNames(
                        "tw-p-2 tw-mr-2.5 tw-text-primary-1000 tw-cursor-pointer tw-font-medium",
                        "tw-text-[1rem] tw-tracking-[-0.01em]"
                    )}>
                        Sign up
                    </div>

                    <div className={classNames(
                        "tw-flex tw-items-center tw-justify-center tw-bg-primary-1000 tw-h-11 tw-w-[7.4375rem] tw-rounded-lg tw-cursor-pointer",
                        "tw-text-white tw-text-[1rem] tw-leading-snug tw-tracking-[-0.01em]"
                    )}>
                        Get the app
                    </div>

                </div>

                <div className="tw-block md:tw-hidden">
                    <SandwichMenu className='tw-w-7 tw-h-7'/>
                </div>
            </div>
        </div>

    </>
}