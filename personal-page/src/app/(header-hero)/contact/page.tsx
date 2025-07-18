import contactBG from '/public/images/guy-fawkes-308973.svg';
import Hero from '@/components/Hero';

export default function ContactPage() {
    return (
        <>
            <Hero imgData={contactBG} imgAlt="V for Vendetta" heroTitle='Catch me if you can.' objectFit='contain' objectPosition='55% center' scale={0.9} />
        </>
    );
}