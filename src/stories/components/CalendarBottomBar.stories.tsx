import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Course, Status } from '@shared/types/Course';
import Instructor from '@shared/types/Instructor';
import { CalendarBottomBar } from '@views/components/common/CalendarBottomBar/CalendarBottomBar';

const exampleGovCourse: Course = new Course({
    courseName: 'Nope',
    creditHours: 3,
    department: 'GOV',
    description: ['nah', 'aint typing this', 'corndog'],
    flags: ['no flag for you >:)'],
    fullName: 'GOV 312L Something something',
    instructionMode: 'Online',
    instructors: [
        new Instructor({
            firstName: 'Bevo',
            lastName: 'Barrymore',
            fullName: 'Bevo Barrymore',
        }),
    ],
    isReserved: false,
    number: '312L',
    schedule: {
        meetings: [],
    },
    semester: {
        code: '12345',
        season: 'Spring',
        year: 2024,
    },
    status: Status.OPEN,
    uniqueId: 12345,
    url: 'https://utdirect.utexas.edu/apps/registrar/course_schedule/20242/12345/',
});

const examplePsyCourse: Course = new Course({
    courseName: 'Nope Again',
    creditHours: 3,
    department: 'PSY',
    description: ['nah', 'aint typing this', 'corndog'],
    flags: ['no flag for you >:)'],
    fullName: 'PSY 317L Yada yada',
    instructionMode: 'Online',
    instructors: [
        new Instructor({
            firstName: 'Bevo',
            lastName: 'Etz',
            fullName: 'Bevo Etz',
        }),
    ],
    isReserved: false,
    number: '317L',
    schedule: {
        meetings: [],
    },
    semester: {
        code: '12346',
        season: 'Spring',
        year: 2024,
    },
    status: Status.CLOSED,
    uniqueId: 12346,
    url: 'https://utdirect.utexas.edu/apps/registrar/course_schedule/20242/12345/',
});

const meta = {
    title: 'Components/Common/CalendarBottomBar',
    component: CalendarBottomBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CalendarBottomBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        courses: [exampleGovCourse, examplePsyCourse],
    },
    render: props => (
        <div className='outline-red outline w-292.5!'>
            <CalendarBottomBar {...props} />
        </div>
    ),
};
