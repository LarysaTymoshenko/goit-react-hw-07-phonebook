import Form from "../Form/Form";
import Section from "../Section/Section";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";
import s from './App.module.css';


export default function App() {
 
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contact">
          <Filter/>
        <ListContacts />
      </Section>
    </div>
  );
}
