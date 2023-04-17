import { Result } from '../../types/types';

interface CardProps {
    item: Result;
}

const Card = ({ item }: CardProps) => {
    const { authors, mostRecentFormat, genre, format, imageUrl, name, price } = item;

    const authorList = authors.map((author) => (
        <p className="mb-4 text-sm text-[color:#919191]" key={author.id}>
            {author.name}
        </p>
    ));

    return (
        <div className="flex flex-col w-full mb-5 rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row sm:flex-row">
            <img className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg lg:w-[100px] xs:w-full sm:w-[100px]" src={imageUrl} alt="" />
            <div className="flex flex-col justify-start p-6 w-full">
                <h5 className="mb-1 text-[color:#212121]">{name}</h5>
                {authorList}
                <p className="text-sm text-[color:#919191]">{mostRecentFormat?.isbn ? `${mostRecentFormat?.isbn} . ${genre} . ${format}` : `${genre} . ${format}`}</p>
            </div>
            <div className="flex flex-col p-6">
                <p className="text-2xl font-medium text-[color:#212121]">${price}</p>
            </div>
        </div>
    );
};

export default Card;