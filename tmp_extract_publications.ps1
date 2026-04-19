$content = Get-Content .\tmp_publications.html -Raw
$doc = New-Object -ComObject HTMLFile
$doc.IHTMLDocument2_write($content)
$doc.close()
$links = @()
foreach ($a in $doc.getElementsByTagName('a')) {
    if ($a.innerText -eq 'Link') {
        $links += [PSCustomObject]@{ href = $a.href; text = $a.innerText }
    }
}
$links | Select-Object -First 20 | Format-Table -AutoSize
