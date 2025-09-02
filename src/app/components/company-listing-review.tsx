import { Box, Tabs, Text } from "@radix-ui/themes";
import { company } from "../../../generated/prisma";

export default function companylistingreview({ company }:{company:company}) {
	return (
		<div>
			<Tabs.Root defaultValue="account">
				<Tabs.List>
					<Tabs.Trigger value="account">Account</Tabs.Trigger>
					<Tabs.Trigger value="documents">Documents</Tabs.Trigger>
					<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
				</Tabs.List>

				<Box pt="3">
					<Tabs.Content value="account">
						<Text size="2">Make changes to your account.</Text>
					</Tabs.Content>

					<Tabs.Content value="documents">
						<Text size="2">Access and update your documents.</Text>
					</Tabs.Content>

					<Tabs.Content value="settings">
						<Text size="2">Edit your profile or update contact information.</Text>
					</Tabs.Content>
				</Box>
			</Tabs.Root>


		</div>
	)
}
