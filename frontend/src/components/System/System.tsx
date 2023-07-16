import { steps } from '../../constants';
import styles from '@root/style';
import Image from 'next/image';
const Stats = () => {
  return (
    <section className="fontRaleway bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ulsDark sm:text-4xl">
            Система получения товара
          </h2>
        </div>

        <div className='flex flex-row justify-between mt-8'>
        {steps.map(item=>(
                <div className='flex flex-col gap-3'>
                    <div className='rounded-full w-10 h-10 bg-[#9AD6F7] flex justify-center items-center text-white font-bold text-2xl'> 
                        {item.num}
                    </div>
                    <h4 className='text-[#111322] font-bold text-2xl'>{item.title}</h4>
                    <p className='text-[#111322] opacity-80 font-medium'>{item.value}</p>
                </div>
        ))}
        </div>

        </div>
    </section>
  );
};

export default Stats;