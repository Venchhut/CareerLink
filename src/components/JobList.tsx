import {
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Skeleton,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconClockHour3,
  IconPointFilled,
} from "@tabler/icons-react";
import { jobList } from "../data/job";
import { useEffect, useState } from "react";
interface Job {
  id: number;
  title: string;
  company: string;
  applicants: string;
  level: string;
  employmentType: string;
  schedule: string;
  salary: string;
  description: string;
  postedDaysAgo: number;
  icon: string;
}
const JobList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setJobs(jobs);
      setIsLoading(false);
    }, 2000);
  }, [jobs]);
  return (
    <div>
      <Group justify="space-between" mt={20} mb={20}>
        <Text size="xl">Recommended Jobs</Text>
        <Group>
          <Button
            variant="default"
            radius={"xl"}
            rightSection={<IconAdjustmentsHorizontal size={16} />}
          >
            Most recent
          </Button>
        </Group>
      </Group>
      <Grid>
        <Grid.Col span={2}>
          <Stack>
            <Text>Job Type</Text>
            <Checkbox defaultChecked label="Full Time" variant="default" />
            <Checkbox defaultChecked label="Part Time" />
            <Checkbox label="Internship" />
            <Checkbox defaultChecked label="Project Work" />
            <Checkbox label="Volunteering" />
            <Text>Salary Range</Text>
            <Slider
              color="black"
              min={20}
              marks={[
                { value: 50, label: "$50k" },
                { value: 120, label: "$120k" },
              ]}
            />
            <Text>Experience Level</Text>
            <Checkbox label="Entry Level" variant="default" />
            <Checkbox defaultChecked label="Intermediate" />
            <Checkbox defaultChecked label="Expert" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={10}>
          <SimpleGrid cols={{ base: 2, md: 3 }}>
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} radius={"md"} shadow="md" withBorder>
                    <Skeleton height={30} radius={"md"} mb={10} />
                    <Skeleton height={20} radius={"md"} mb={10} />
                    <Skeleton height={50} radius={"md"} mb={10} />
                    <Skeleton height={20} radius={"md"} mb={10} />
                  </Card>
                ))
              : jobList.map((job) => <JobCard job={job} key={job.id} />)}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default JobList;

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card radius={"md"} shadow="md" withBorder>
      <Stack>
        <Group justify="space-between">
          <Group>
            <Image src={job.icon} width={30} height={30} />
            <Stack gap={0}>
              <Text size="md">{job.title}</Text>
              <Group>
                <Text size="sm">{job.company}</Text>
                <Flex justify="flex-start" align="center">
                  <IconPointFilled size={10} />
                  <Text size="sm" pl={4}>
                    {job.applicants}
                  </Text>
                </Flex>
              </Group>
            </Stack>
          </Group>
        </Group>
        <Flex gap={4}>
          <Badge
            size="xs"
            radius={"sm"}
            bg={job.level == "Entry Level" ? "green" : "cyan"}
          >
            {job.level}
          </Badge>
          <Badge
            size="xs"
            radius={"sm"}
            bg={job.schedule == "Full-Time" ? "grape" : "red"}
          >
            {job.schedule}
          </Badge>
          <Badge
            size="xs"
            radius={"sm"}
            bg={job.employmentType == "Full-Time" ? "indigo" : "teal"}
          >
            {job.employmentType}
          </Badge>
        </Flex>

        <Text fz={14} mb={0}>
          {job.description}
        </Text>
        <Divider mt={0} c="#070707" />
        <Group justify="space-between">
          <Text>{job.salary}</Text>
          <Flex justify={"center"}>
            <IconClockHour3 size={16} />
            <Text size="sm">Posted {job.postedDaysAgo} days ago</Text>
          </Flex>
        </Group>
      </Stack>
    </Card>
  );
};
