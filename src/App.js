import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Random from './components/Random';
import Rating from './components/Rating';

const idCard = {
  lastName: 'Hardiment',
  firstName: 'Alex',
  gender: 'male',
  height: 6,
  birth: new Date(1994, 0, 15),
  picture: 'https://randomuser.me/api/portraits/men/44.jpg',
};

const creditCard = [
  {
    type: 'Visa',
    number: '2345123445673456',
    expirationMonth: 3,
    expirationYear: 2026,
    bank: 'Santander',
    owner: 'John Smith',
    bgColor: 'green',
    color: 'white',
  },
  {
    type: 'Mastercard',
    number: '1234567812345678',
    expirationMonth: 3,
    expirationYear: 2026,
    bank: 'Barclays',
    owner: 'Jane Doe',
    bgColor: 'beige',
    color: 'black',
  },
  {
    type: 'Mastercard',
    number: '8765432187654321',
    expirationMonth: 3,
    expirationYear: 2026,
    bank: 'Nationwide',
    owner: 'John Doe',
    bgColor: 'indigo',
    color: 'white',
  },
];

function App() {
  return (
    <div className="App">
      <IdCard
        lastName={idCard.lastName}
        firstName={idCard.firstName}
        gender={idCard.gender}
        height={idCard.height}
        birth={idCard.birth.toLocaleDateString()}
        image={idCard.picture}
        className="id-card"
      />
      <Greetings lang="en">Alex</Greetings>
      <Random min={1} max={6} />
      <BoxColor r={255} g={0} b={0} />
      <div className="credit-cards">
        <CreditCard
          type={creditCard[0].type}
          number={creditCard[0].number}
          expirationMonth={creditCard[0].expirationMonth}
          expirationYear={creditCard[0].expirationYear}
          bank={creditCard[0].bank}
          owner={creditCard[0].owner}
          bgColor={creditCard[0].bgColor}
          color={creditCard[0].color}
        />
        <CreditCard
          type={creditCard[1].type}
          number={creditCard[1].number}
          expirationMonth={creditCard[1].expirationMonth}
          expirationYear={creditCard[1].expirationYear}
          bank={creditCard[1].bank}
          owner={creditCard[1].owner}
          bgColor={creditCard[1].bgColor}
          color={creditCard[1].color}
        />
        <CreditCard
          type={creditCard[2].type}
          number={creditCard[2].number}
          expirationMonth={creditCard[2].expirationMonth}
          expirationYear={creditCard[2].expirationYear}
          bank={creditCard[2].bank}
          owner={creditCard[2].owner}
          bgColor={creditCard[2].bgColor}
          color={creditCard[2].color}
        />
      </div>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Alex Hardiment"
        rating={3.5}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <LikeButton />
    </div>
  );
}

export default App;
