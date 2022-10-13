import MembersWrapper from "./members-wrapper";
import Image from "next/image";
import chesterImg from "../members/imgs/chester-bennington.jpg";
import mikeImg from "../members/imgs/Mike-shinoda.jpg";
import bradImg from "../members/imgs/brad-delson.jpg";
import daveImg from "../members/imgs/dave-farrell.jpeg";
import robImg from "../members/imgs/rob-bourdon.jpg";
import joeImg from "../members/imgs/joe-hahn.jpg";

export default function BandMembers() {
  return (
    <>
    <div className="my-5 m-auto w-11/12 lg:8/12">

      <MembersWrapper>
        <div className="flex mt-5">
          <Image src={chesterImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">
              Chester Bennington
            </h3>
            <p>
              American singer, song writer, musician and actor. Lead vocalist
              for Linkin Park. He is best remembered for his trademark
              high-pitched voice that mesmerized many ‘Linkin Park’ fans. On
              July 20, 2017, Chester Bennington had committed suicide by
              hanging.
            </p>
          </div>
        </div>
        <div className="flex mt-5">
          <Image src={mikeImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">Mike Shinoda</h3>
            <p>
              American musician, singer, songwriter, rapper, record producer,
              and graphic designer. He co-founded Linkin Park in 1996 and is one
              of the bands vocalists, as well as rhythm guitarist, keyboardist,
              primary songwriter and producer.
            </p>
          </div>
        </div>
      </MembersWrapper>
      <MembersWrapper>
        <div className="flex mt-5">
          <Image src={bradImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">Brad Delson</h3>
            <p>
              American musician and record producer, known as the lead guitarist
              and one of the founding members of Linkin Park
            </p>
          </div>
        </div>
        <div className="flex mt-5">
          <Image src={daveImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">Dave Fareell</h3>
            <p>
              American musician, better known by his stage name Phoenix, bassist
              and backing vocalist of Linkin Park.
            </p>
          </div>
        </div>
      </MembersWrapper>
      <MembersWrapper>
        <div className="flex mt-5">
          <Image src={robImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">Rob Bourdon</h3>
            <p>
              American musician, best known as the drummer and co-founding
              member of Linkin Park.
            </p>
          </div>
        </div>
        <div className="flex mt-5">
          <Image src={joeImg} alt="`" width={180} height={270} />
          <div className="w-96 flex flex-col ml-5">
            <h3 className="mb-4 text-lg font-bold md:block">Joe Hanh</h3>
            <p>
              American musician, best known as the DJ and backing vocalist of
              Linkin park. doing the scratching, turntables, sampling and
              programming for all seven of Linkin Parks albums. Hahn and Mike
              Shinoda, are responsible for most of Linkin Parks album artowrk.
            </p>
          </div>
        </div>
      </MembersWrapper>
    </div>
    </>
  );
}
