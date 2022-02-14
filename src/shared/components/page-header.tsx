import { ArrowRightIcon } from '@heroicons/react/outline';
import {ReactComponent as Logo} from 'images/logo.svg'
import {ReactComponent as SandwichMenu} from 'images/sandwich-menu.svg'

export function PageHeader() {
    return <>
        <div className="tw-flex tw-items-center tw-justify-center tw-h-16 md:tw-h-10.5 tw-bg-primary-1000 tw-px-12.5">
            <p className="tw-text-white tw-tracking-[-0.01em] tw-leading-snug">Get  no-fee trading for life when you sign up today</p>
            <ArrowRightIcon className='tw-text-white tw-w-7 tw-h-7' />
        </div>

        <div className='tw-container tw-flex tw-justify-between tw-py-5.75 tw-bg-stgrey-6'>
            <Logo className='tw-h-8'/>

            <ul className="tw-hidden md:tw-flex">
                <li className="tw-mr-7.5 tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">
                    Stocks
                </li>
                <li className="tw-mr-7.5 tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">Crypto</li>
                <li className="tw-font-medium tw-text-primary-1000 tw-leading-snug tw-tracking-[-0.01em]">Trade</li>
            </ul>

            <div>
                <SandwichMenu className='tw-w-7 tw-h-7'/>
            </div>
        </div>

    </>
}