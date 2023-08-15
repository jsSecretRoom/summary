import './acquaintance.scss';
import MyFoto from '../../img/my.jpg'
function Acquaintance() {
    return ( 
        <section className='about-my'>
            <p>Nice to meet you!</p>
            <div className='acquaintance-with-me'>
              <p className='text'>
                My name is Ruslan! I am 23 years old, Mykolaiv Ukaina!
                I do most of the development in the second half of the year and get results
                in your field! At this stage, you can find your job, recognition, etc. d.
                projects with the possibility of their assessment! My metabolic rate and speed!
                I use new standards for writing code that validates new ones
                methods where necessary.
              </p>
              <img src={MyFoto} alt="" />
            </div>
        </section>
    );
}

export default Acquaintance;
