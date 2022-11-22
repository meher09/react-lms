import React from 'react';
import ReactImageMagnify from 'react-image-magnify';


const TeamCard = ({ team }) => {
    const { name, profession, image } = team
    return (
        <div class="group relative block bg-black mr-5 my-12">
            <img
                alt="Developer"
                src={image}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    {profession}
                </p>

                <p class="text-2xl font-bold text-white">{name}</p>

                <div class="mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                            reiciendis nostrum harum. Repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TeamCard;