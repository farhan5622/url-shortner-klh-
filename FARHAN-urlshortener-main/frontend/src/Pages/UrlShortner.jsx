import { useState } from "react";
import { Center, Stack, Text, TextInput } from "@mantine/core";

export default function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customLink, setCustomLink] = useState("");
  const [title, setTitle] = useState("");

  return (
    <Center style={{ height: "90vh" }}>
      <Stack spacing="md" align="center" w={400}>
        <Text size="xl" fw={700}>
          Short Your Url Here
        </Text>

        <TextInput
          label="Original Url"
          withAsterisk
          onChange={(e) => setOriginalUrl(e.target.value)}
          value={originalUrl}
          placeholder="Enter the original URL"
        />

        <TextInput
          label="Customize Your Url (Optional)"
          onChange={(e) => setCustomLink(e.target.value)}
          value={customLink}
          placeholder="e.g. my-custom-link"
        />

        <TextInput
          label="Title (Optional)"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Give a title for your shortened link"
        />
      </Stack>
    </Center>
  );
}
