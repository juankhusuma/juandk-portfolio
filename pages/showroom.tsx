import { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import Button from '@components/Button';
import { SunIcon, MoonIcon, ReloadIcon, PlayIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import Loader from '@components/Loader';
import DecoderText from '@components/DecoderText';

const Showroom: NextPage = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [startDecoderText, setStartDecoderText] = useState<boolean>(true);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const changeTheme = (): void => {
        if (isMounted) {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }
    };

    return (
        <>
            <Head>
                <title>Juan D Khusuma | Showroom</title>
                <meta
                    name="description"
                    content="Showroom to showcase and test the components of the website"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <main>
                <Button
                    className="absolute top-0 left-0 mt-3 ml-3"
                    onClick={changeTheme}
                >
                    {theme === 'light' ? (
                        <MoonIcon className="dark:text-white" />
                    ) : (
                        <SunIcon className="dark:text-white" />
                    )}
                </Button>

                <header className="mt-3 text-xl font-bold text-center underline">
                    My Components
                </header>

                <main className="grid gap-0 mx-auto mt-10 justify-items-center lg:grid-cols-4 md:grid-cols-2">
                    <Tiles label="Color" className="relative">
                        <div className="flex flex-col items-center h-auto text-xs text-center">
                            <div className="w-full h-auto text-black bg-primary-light">
                                Primary Light
                            </div>
                            <div className="w-full h-auto text-white bg-primary-dark">
                                Primary Dark
                            </div>
                            <div className="w-full h-auto text-white bg-secondary-light">
                                Secondary Light
                            </div>
                            <div className="w-full text-white bg-secondary-dark">
                                Secondary Dark
                            </div>
                            <div className="w-full text-white bg-accent-light">
                                Accent Light
                            </div>
                            <div className="w-full text-white bg-accent-dark">
                                Accent Dark
                            </div>
                        </div>
                    </Tiles>
                    <Tiles label="Loader Component">
                        <Loader placeholder="test" />
                    </Tiles>
                    <Tiles label="Button Component">
                        <Button>Button</Button>
                    </Tiles>
                    <Tiles label="Button Secondary">
                        <Button secondary>Button</Button>
                    </Tiles>
                    <Tiles label="Button Loader">
                        <Button loader={{ placeholder: 'Loader' }} />
                        <Button
                            loader={{ placeholder: 'Loader', secondary: true }}
                            className="mt-3"
                        />
                    </Tiles>
                    {/* Decoder Text Showcase */}
                    <Tiles label="Decoder Text">
                        <DecoderText
                            className="font-bold"
                            text="Decoder Text"
                            start={startDecoderText}
                        />
                        <div className="absolute bottom-0 right-0 m-3">
                            {startDecoderText ? (
                                <Button
                                    onClick={() => setStartDecoderText(false)}
                                >
                                    <ReloadIcon className="dark:text-white" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => setStartDecoderText(true)}
                                >
                                    <PlayIcon className="dark:text-white" />
                                </Button>
                            )}
                        </div>
                    </Tiles>
                </main>
            </main>
        </>
    );
};

interface TilesProps {
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    label: string;
}
/**
 * @return {JSX.Element}
 */
function Tiles({ children, className, label }: TilesProps): JSX.Element {
    return (
        <div
            className={`relative w-full min-h-[300px] border-[0.5px] border-dashed border-black dark:border-white flex justify-center flex-col items-center ${className}`}
        >
            <h1 className="absolute top-0 p-5 text-sm font-bold">{label}</h1>
            {children}
        </div>
    );
}

export default Showroom;
