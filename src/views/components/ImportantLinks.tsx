import React from 'react';
import clsx from 'clsx';
import Text from './common/Text/Text';
import OutwardArrowIcon from '~icons/material-symbols/arrow-outward';

type Props = {
    className?: string;
};

/**
 * The "Important Links" section of the calendar website
 * @returns
 */
export default function ImportantLinks({ className }: Props) {
    return (
        <article className={clsx(className, 'flex flex-col gap-2')}>
            <Text variant='h3'>Important Links</Text>
            <a
                href='https://utdirect.utexas.edu/apps/registrar/course_schedule/20242/'
                className='text-ut-burntorange flex items-center gap-0.5'
                target='_blank'
                rel='noreferrer'
            >
                <Text variant='p'>Spring Course Schedule</Text>
                <OutwardArrowIcon className='h-3 w-3' />
            </a>
            <a
                href='https://utdirect.utexas.edu/apps/registrar/course_schedule/20236/'
                className='text-ut-burntorange flex items-center gap-0.5'
                target='_blank'
                rel='noreferrer'
            >
                <Text variant='p'>Summer Course Schedule</Text>
                <OutwardArrowIcon className='h-3 w-3' />
            </a>
            <a
                href='https://utdirect.utexas.edu/registrar/ris.WBX'
                className='text-ut-burntorange flex items-center gap-0.5'
                target='_blank'
                rel='noreferrer'
            >
                <Text variant='p'>Registration Info Sheet</Text>
                <OutwardArrowIcon className='h-3 w-3' />
            </a>
            <a
                href='https://utdirect.utexas.edu/registration/chooseSemester.WBX'
                className='text-ut-burntorange flex items-center gap-0.5'
                target='_blank'
                rel='noreferrer'
            >
                <Text variant='p'>Register For Courses</Text>
                <OutwardArrowIcon className='h-3 w-3' />
            </a>
            <a
                href='https://utdirect.utexas.edu/apps/degree/audits/'
                className='text-ut-burntorange flex items-center gap-0.5'
                target='_blank'
                rel='noreferrer'
            >
                <Text variant='p'>Degree Audit</Text>
                <OutwardArrowIcon className='h-3 w-3' />
            </a>
        </article>
    );
}
