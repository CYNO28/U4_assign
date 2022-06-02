import React, { useState } from "react";
import style from "./credit.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Icon,
  styled,
  Button,
} from "@chakra-ui/react";
import {
  AiFillCalendar,
  AiOutlineCalendar,
  AiOutlineCreditCard,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
const Payment = () => {
  const [first, setfirst] = useState({
    Name: "John Smith",
    CardNumber: "4556-7890-5678-4532",
    ExpiryDate: "04/22",
    CVV: "ccv",
  });
  const [ExpiryDatE, setDate] = useState({
    month: "",
    year: "",
  });

  function onChangeHandler(e) {
    setfirst({
      ...first,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className={style.superparent}>
      <div className={style.imgdiv}>
        <div className={style.cardbox}>
          <p className={style.crnumber}>{first.CardNumber}</p>
          <div className={style.flexhead}>
          <p>Name</p>
          <p>ExpiryDate</p>
          <p>CVV</p>
          </div>
          <div className={style.flexdet}>
          <p>{first.Name}</p>
          <p>{first.ExpiryDate}</p>
          <p>{first.CVV}</p>
          </div>
        </div>
      </div>
      <div className={style.form}>
        <Stack spacing={4}>
          <label htmlFor="">CARDHOLDER NAME</label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineUserAdd} color="red.500" />}
            />
            <Input
              type="tel"
              placeholder="John Smith"
              onChange={onChangeHandler}
              name="Name"
            />
          </InputGroup>
          <label htmlFor="">CARD NUMBER</label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineCreditCard} color="red.500" />}
            />
            <Input
              type="tel"
              placeholder="4256 7890 5678 4532"
              onChange={onChangeHandler}
              name="CardNumber"
            />
          </InputGroup>
          <div className={style.ccv}>
            <div>
              <label htmlFor="">Month</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiOutlineCalendar} color="red.500" />}
                />
                <Input
                  type="tel"
                  placeholder="04"
                  onChange={(e) =>
                    setDate({ ...ExpiryDatE, month: e.target.value })
                  }
                />
              </InputGroup>
            </div>
            <div>
              <label htmlFor="">Year</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiFillCalendar} color="red.500" />}
                />
                <Input
                  type="tel"
                  placeholder="2022"
                  onChange={(e) =>
                    setDate({ ...ExpiryDatE, year: e.target.value })
                  }
                />
              </InputGroup>
            </div>
            <div>
              <label htmlFor="">CCV</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={BiLock} color="red.500" />}
                />
                <Input
                  type="tel"
                  placeholder="ccv"
                  onChange={onChangeHandler}
                />
              </InputGroup>
            </div>
          </div>
        </Stack>
        <p> Payment amount:<p className={style.red}>12300 P</p> </p>

        <Button
          className={style.paybtn}
          colorScheme="pink"
          variant="solid"
          backgroundColor="red.500"
          onClick={() => {
            first["ExpiryDate"] = ExpiryDatE.month + "/" + ExpiryDatE.year;
            setfirst(first);
          }}
        >
          PAY
        </Button>
      </div>
    </div>
  );
};

export default Payment;
