import { TextInput, Textarea, Button, Stack, Title, Group, Badge } from "@mantine/core"
import { useState } from "react"

export default function BlogEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  return (
    <Stack spacing="md" p="md">
      <Title order={2}>Create Blog</Title>
      <TextInput
        label="Title"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Textarea
        label="Content"
        placeholder="Write your blog here..."
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        minRows={10}
      />
      <TextInput
        label="Tags"
        placeholder="Comma-separated tags (e.g., react, tech)"
        value={tags}
        onChange={(e) => setTags(e.currentTarget.value)}
      />
      <Group>
        <Button color="gray">Save Draft</Button>
        <Button color="blue">Publish</Button>
      </Group>
    </Stack>
  )
}
