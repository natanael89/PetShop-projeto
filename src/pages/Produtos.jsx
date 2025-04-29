import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { ProductCard } from "../components/common/ProductCard"

export const Produtos = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-12 text-green-600">Nossos Produtos e Serviços</h1>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Oferecemos uma variedade de produtos e serviços de alta qualidade para garantir o bem-estar e a felicidade do
                seu pet.
            </p>

            <Tabs defaultValue="tab1" className="w-full ">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-200">
                    <TabsTrigger value="tab1">Tosa e Banho</TabsTrigger>
                    <TabsTrigger value="tab2">Ração</TabsTrigger>
                    <TabsTrigger value="tab3">Acessórios</TabsTrigger>
                </TabsList>

                <TabsContent value="tab1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                          title="Tosa Especializada"
                          price="A partir de R$ 50,00"
                          description="Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável."
                          image="https://artgroomer.com/wp-content/uploads/2023/07/SSSS.jpg"
                        />
                        <ProductCard
                          title="Banho Relaxante"
                          price="A partir de R$ 40,00"
                          description="Banhos relaxantes para cães e gatos. Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante."
                          image="https://i0.statig.com.br/bancodeimagens/c2/ii/bl/c2iibllhil40xiowf11yottkx.jpg"
                        />
                        <ProductCard
                          title="Pacote Completo"
                          price="A partir de R$ 80,00"
                          description="Banho + tosa + higienização completa. Inclui limpeza de ouvidos, corte de unhas e perfume especial para pets."
                          image="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13024/banho-e-tosa-em-caes-e-gatos-cursos-cpt.jpg"
                        />
                    </div>
                </TabsContent>

                <TabsContent value="tab2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                          title="Ração Premium para Cães"
                          price="R$ 120,00"
                          description="Ração premium para cães adultos. Formulada com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet."
                          image="https://extrutecnicapet.com.br/wp-content/uploads/2023/06/Colosso-Cachorros-Racas-Pequenas-Frango-e-Arroz-2kg.jpg"
                        />
                        <ProductCard
                          title="Ração Premium para Gatos"
                          price="R$ 110,00"
                          description="Ração premium para gatos adultos. Formulada com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet."
                          image="https://extrutecnicapet.com.br/wp-content/uploads/2023/06/Colosso-Gatos-Castrados-Carne-e-Arroz-1kg.jpg"
                        />
                        <ProductCard
                          title="Ração Especial Filhotes"
                          price="R$ 130,00"
                          description="Ração especial para filhotes. Contém nutrientes essenciais para o desenvolvimento saudável do seu pet nos primeiros meses de vida."
                          image="https://cdn.awsli.com.br/2500x2500/203/203612/produto/227796447/13---af_pro001_mockup_petlife_caesadultosmini_saborfrangoearroz_3kg_embaixa-z10t1znlwj.jpg"
                        />
                    </div>
                </TabsContent>

                <TabsContent value="tab3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                          title="Brinquedos Interativos"
                          price="A partir de R$ 25,00"
                          description="Brinquedos interativos que estimulam a mente e o corpo do seu pet, promovendo o exercício físico e mental."
                          image="https://img.freepik.com/fotos-gratis/conceito-de-natureza-morta-de-acessorios-para-animais-de-estimacao-com-objetos-coloridos_23-2148949578.jpg"
                        />
                        <ProductCard
                          title="Produtos de Higiene"
                          price="A partir de R$ 15,00"
                          description="Shampoos e condicionadores específicos para diferentes tipos de pelagem, escovas e pentes para manter os pelos desembaraçados e saudáveis."
                          image="https://img.freepik.com/vetores-premium/conjunto-de-produtos-para-higiene-de-animais-de-estimacao_185320-113.jpg"
                        />
                        <ProductCard
                          title="Acessórios Essenciais"
                          price="A partir de R$ 20,00"
                          description="Coleiras, guias, comedouros e outros acessórios essenciais para o dia a dia do seu pet."
                          image="https://img.freepik.com/vetores-gratis/conjunto-moderno-de-varios-acessorios-para-caes-e-gatos_74855-15557.jpg"
                        />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
