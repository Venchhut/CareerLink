import {
  Avatar,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./HeroSection.module.css";
import { IconMapPin, IconSearch, IconBell } from "@tabler/icons-react";
import { HeaderSimple } from "./Header";
import logo from "../assets/logo.jpg";
import profile from "../assets/profile.png";
const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <Stack justify="space-between">
        <Group justify="space-between" align="center" mt={"0"} pl={30} pr={30}>
          <Group>
            <Image src={logo} height={60} width={60} radius={"xl"} />
          </Group>
          <Group>
            <HeaderSimple />
          </Group>
          <Group>
            <Flex justify={"space-between"} gap={20}>
              <IconBell color="#a1a1a1" />
              <Text c="#a1a1a1">Find jobs</Text>
              <Avatar src={profile} alt="it's me" />
            </Flex>
          </Group>
        </Group>
        <Title order={2} c={"white"} pl={30}>
          Find Your Dream Job Here
        </Title>
        <Group
          style={{
            background: "#000",
            padding: "20px",
          }}
        >
          <Group
            justify="space-between"
            pl={10}
            pr={10}
            style={{
              background: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              width: "100%",
              height: "3rem",
            }}
          >
            <TextInput
              placeholder="Job title or keyword"
              styles={{
                input: {
                  border: "none",
                },
              }}
              leftSection={<IconSearch size={16} />}
            />
            <TextInput
              styles={{
                input: {
                  border: "none",
                },
              }}
              placeholder="Add country or city"
              leftSection={<IconMapPin size={16} />}
            />
            <Button
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "1rem",
              }}
            >
              Search
            </Button>
          </Group>
        </Group>
      </Stack>
    </div>
  );
};

export default HeroSection;
