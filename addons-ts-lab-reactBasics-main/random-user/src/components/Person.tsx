import {ChangeEvent, FC, useState} from 'react';

export enum HairColor {
    Blonde = 'Your hair is blonde',
    Brown = 'Cool hair color',
    Pink = 'That is so cool'
}

interface IPersonProps {
    name : string;
    age: number;
    email: string;
    hairColor: HairColor;
}



export const Person: FC<IPersonProps> = ({name, age, email, hairColor}) => {

    const [country, setCountry] = useState<string | null >(null);

    type NameType = 'Andrés' | 'Tora';
    const nameForType: NameType = 'Andrés';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setCountry(e.target.value);
    }

    
  return (
    <div>
      <h1> {name} </h1>
      <h1> {age} </h1>
      <h1> {email} </h1>
      <input placeholder='Write down your country ...' onChange={handleChange}/>
      <h1> {country} </h1>
      <h1> {hairColor} </h1>
    </div>
  );
}
