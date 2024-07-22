import Link from "next/link"
import Image from "next/image"

type FooterItem = {
    href: string;
    label: string;
};

type SosmedItem = {
    imageUrl: string;
    href: string;
}

function Footer() {
    const footerItems: FooterItem[] = [
        { href: "/", label: "Home"},
        { href: "/", label: "Feedback"},
        { href: "/", label: "Courses"},
        { href: "/", label: "Offers"},
        { href: "/", label: "Blog"},
        { href: "/", label: "Help and Support"},
        { href: "/", label: "Affiliate"},
        { href: "/", label: "Investors"},
        { href: "/", label: "Terms"},
        { href: "/", label: "Privacy"},
        { href: "/", label: "Cookies"},
        { href: "/", label: "Sitemap"},
    ]

    const sosmedItems: SosmedItem[] = [
        { imageUrl: "/images/twitter.svg", href: "/"},
        { imageUrl: "/images/facebook.svg", href: "/"},
        { imageUrl: "/images/website.svg", href: "/"},
    ]

    return (
        <footer className="py-16 bg-gray-100">

            <div className="flex flex-col gap-16 max-w-7xl m-auto relative w-11/12">

                    <div className="w-full flex flex-row gap-36 items-center text-gray-800">
                        <div className="lg:max-w-80 flex flex-col gap-6 w-full">
                            <h3 className="text-3xl leading-6">Example</h3>
                            <p>pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis</p>
                        </div>
                        <div className="flex gap-12 lg:w-full lg:visible collapse w-0">
                            <div className="flex flex-col gap-3 grow">
                            {footerItems.slice(0,4).map((item) => (
                                <Link href={item.href} key={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                            </div>
                            <div className="flex flex-col gap-3 grow">
                            {footerItems.slice(4,8).map((item) => (
                                <Link href={item.href} key={item.href}>
                                {item.label}
                            </Link>
                            ))}
                            </div>
                            <div className="flex flex-col gap-3 grow">
                            {footerItems.slice(8).map((item) => (
                                <Link href={item.href} key={item.href}>
                                {item.label}
                                </Link>
                            ))}
                            </div>
                        </div>
                    </div>

                <div className="flex flex-row justify-between text-gray-300 fill-gray-300">
                    <p className="text-gray-500">&copy; 2024 Example. Inc. </p>
                    <div className="flex gap-6 flex-row ">
                    {sosmedItems.map((item) => (
                        <Link href={item.href} key={item.href}>
                            <Image
                                width={24}
                                height={24}
                                alt="social-media"
                                src={item.imageUrl}
                            />
                        </Link>
                    ))}
                    </div>
                </div>

            </div>

        </footer>
    );
}

export { Footer };