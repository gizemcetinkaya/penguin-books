import book from '../../assets/book.jpg';

const Card = () => {
    return (
        <div className="flex flex-col w-full mb-5 rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
            <img className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg" src={book} alt="" />
            <div className="flex flex-col justify-start p-6 w-full">
                <h5 className="mb-1 text-[color:#212121]">THE ISLAND</h5>
                <p className="mb-4 text-sm text-[color:#919191]">
                    Natasha Preston
                </p>
                <p className="text-sm text-[color:#919191]">
                    ISBN 9780593481493 . Young Adult . Paperback
                </p>
            </div>
            <div className="flex flex-col p-6">
                <p className="text-2xl font-medium text-[color:#212121]">$12.99</p>
            </div>
        </div>
    );
}

export default Card;
