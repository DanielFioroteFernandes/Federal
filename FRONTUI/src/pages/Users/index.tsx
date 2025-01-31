import { ModeToggle } from "@/components/Theme/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, Search } from "lucide-react";

function Users() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 w-full justify-between">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/home">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    Controle de acesso dos usuários
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div className="p-6 max-w-4x1 mx-auto space-y-4 ">
            <h1 className="text-3xl font-bold">Usuários</h1>
            {/* div para botão de novo ususario e inputs de pesquisa */}
            <div className="flex items-center justify-between">
              <form className="flex items-center gap-2">
                {/* Input pesquisar */}
                <Input
                  name="email"
                  placeholder="E-mail do usuário"
                  className="w-auto"
                />
                <Input
                  name="nome"
                  placeholder="Nome do usuário"
                  className="w-auto"
                />
                <Button type="submit" variant={"ghost"}>
                  <Search className="w-4 h-4 mr-1" />
                  Filtrar resultados
                </Button>
              </form>
              {/* Botão novo usuário para abrir o modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="w-4 h-4 mr-1" />
                    Novo usuário
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Novo usuário</DialogTitle>
                    <DialogDescription>
                      Criar novo usuário do sistema
                    </DialogDescription>
                  </DialogHeader>

                  <form className="space-y-4">
                    <div className="grid grid-cols-4 items-center text-right gap-3">
                      <Label htmlFor="name">Nome : </Label>
                      <Input className="col-span-3" id="name" required />

                      <Label htmlFor="email">E-mail : </Label>
                      <Input
                        type="email"
                        className="col-span-3"
                        id="email"
                        required
                      />

                      <Label htmlFor="perfil">Perfil : </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Selecione o perfil" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Perfil</SelectLabel>
                            <SelectItem value="basico">basico</SelectItem>
                            <SelectItem value="administrador">
                              Adrministrador
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Label htmlFor="password">Senha : </Label>
                      <Input
                        type="password"
                        className="col-span-3"
                        id="password"
                        required
                      />
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant={"outline"}>
                          Cancelar
                        </Button>
                      </DialogClose>
                      <Button type="submit">Salvar</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Tabela de usuários */}
            <div className="border rounded-lg p-2">
              <Table>
                <TableHeader>
                  <TableHead>Nome:</TableHead>
                  <TableHead>E-mail:</TableHead>
                  <TableHead>Perfil:</TableHead>
                  <TableHead>Senha:</TableHead>
                </TableHeader>

                <TableBody>
                  {Array.from({ length: 10 }).map((_, i) => {
                    return (
                      <TableRow key={i}>
                        <TableHead>Daniel Fiorote Fernandes:</TableHead>
                        <TableHead>Danielfiorote@hotmail.com:</TableHead>
                        <TableHead>Administrador:</TableHead>
                        <TableHead>123456789:</TableHead>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}

export default Users;
