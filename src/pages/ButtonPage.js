import { GoBell, GoChevronDown } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="flex flex-row m-8 justify-around w-full">
      <div className="flex-column justify-evenly">
        <div>
          <Button primary>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoChevronDown />
            Secondary
          </Button>
        </div>
        <div>
          <Button success>Success!</Button>
        </div>
        <div>
          <Button warning>Warning!</Button>
        </div>
        <div>
          <Button danger>Danger!</Button>
        </div>
      </div>
      <div className="flex-column">
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success!
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning!
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger!
          </Button>
        </div>
      </div>
      <div className="flex-column">
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success!
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning!
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger!
          </Button>
        </div>
      </div>
      <div className=" flex-column">
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success!
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning!
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
