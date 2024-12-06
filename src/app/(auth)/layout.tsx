import Image from 'next/image';
import React from 'react';
import ICONS from '../../../public/icons';
const page = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className='mx-auto max-w-screen-xl p-4'>
                <nav className='flex justify-between items-center'>
                    <Image src={ICONS.logo} alt='jira' width={56} height={56} />
                </nav>
                {children}
            </div>
        </main>
    );
};

export default page;
