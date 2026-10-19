import { Button, LinkContainer, LinkExternal } from '#/components/ui/link/link';
import { Section } from '#/components/ui/section/section';
import { TextDescription, TextTitleHero } from '#/components/ui/text/texts';
import Form from '#/features/form/components/form';
import {
	Input,
	Option,
	Select,
	Textarea,
} from '#/features/form/components/inputs';
import { social } from '#/shared/data/social.data';

export default function ContactPage() {
	return (
		<Section>
			<TextTitleHero>Vamos tirar do papel</TextTitleHero>
			<TextDescription>
				Me conte o que você precisa. Eu leio tudo, penso na melhor solução e
				respondo com um plano claro em até 12 horas úteis. Sem robô, sem
				enrolação.
			</TextDescription>
			<LinkContainer>
				<LinkExternal visual='accent' href={social.whatsApp.url}>
					WhatsApp
				</LinkExternal>
				<LinkExternal href={social.email}>E-mail</LinkExternal>
			</LinkContainer>

			<Form>
				<Input type='text' placeholder='Nome' name='name' required />
				<Input type='email' placeholder='E-mail' name='email' required />

				<Select name='type' defaultValue=''>
					<Option value='' disabled>
						Tipo de projeto
					</Option>
					<Option value='landing-page'>Landing Page</Option>
				</Select>

				<Select name='time' defaultValue=''>
					<Option value='' disabled>
						Prazo desejado
					</Option>
					<Option value='urgent'>Urgente</Option>
				</Select>

				<Select name='budget' defaultValue=''>
					<Option value='' disabled>
						Orçamento para o projeto
					</Option>
					<Option value='1k-2k'>R$ 1.000,00 até R$ 2.000,00</Option>
				</Select>

				<Textarea
					name='message'
					placeholder='Conte brevemente sobre o seu projeto...'
					maxLength={1000}
					required
				/>

				<Button type='submit' visual='dark'>
					Enviar
				</Button>
			</Form>
		</Section>
	);
}
